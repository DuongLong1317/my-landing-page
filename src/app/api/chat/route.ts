import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://9router.vuhai.io.vn/v1",
  apiKey: "sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
});

const MODEL = "ces-chatbot-gpt-5.4";

const dataFilePath = path.join(process.cwd(), "chatbot_data.txt");
const brandData = fs.existsSync(dataFilePath) ? fs.readFileSync(dataFilePath, "utf-8") : "";

const SYSTEM_PROMPT = `Bạn là KidFoodie Assistant 🍱 — trợ lý ảo siêu dễ thương của thương hiệu ẩm thực trẻ em SHOKUNIN.

Nhiệm vụ: Tư vấn và trả lời câu hỏi cho các mẹ bỉm sữa đang tìm kiếm bữa ăn ngon, lành mạnh và đẹp mắt cho con yêu.

PHONG CÁCH TRẢ LỜI:
- Luôn nhắn nhủ thật ấm áp, thân thiện như người bạn thân của mẹ 💛
- Dùng ngôi xưng: "mình" và "mẹ" cho thân thương, gần gũi
- Thêm emoji thực phẩm tự nhiên vào câu trả lời (🍣 🍱 🥪 🥑 🐠 🌈 ✨ 🥰)
- Câu ngắn gọn, dễ đọc — KHÔNG dài dòng
- Nếu mẹ hỏi về dị ứng: luôn lưu ý nhẹ nhàng về trứng và hải sản
- Ưu tiên giới thiệu các combo/gói tiết kiệm phù hợp ngân sách mẹ
- Kết thúc mỗi tin nhắn bằng câu hỏi nhỏ để tiếp tục tư vấn (nếu phù hợp)
- CHỈ dùng thông tin được cung cấp bên dưới, không bịa thêm

THÔNG TIN THƯƠNG HIỆU & SẢN PHẨM:
${brandData}`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    const openaiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m: { role: string; content: string }): OpenAI.Chat.ChatCompletionMessageParam => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      })),
    ];
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: openaiMessages,
      temperature: 0.8,
      max_tokens: 500,
    });
    const reply = completion.choices?.[0]?.message?.content?.trim() || "Dạ mình chưa hiểu câu hỏi của mẹ ạ 🥰 Mẹ thử hỏi lại nhé!";
    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("[Chatbot API Error]", error);
    return NextResponse.json({ reply: "Ôi, mình đang bận tí xíu mẹ ơi 🥺 Thử lại sau nhé! 💛" });
  }
}
