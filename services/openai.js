const {
  OPENAI_MAX_TOKENS,
} = require('../configs');

const openai = require('../connections/openai');

async function chatAI({ content, description }) {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content,
      },
      {
        role: 'system',
        content: '好的，我會遵守這個規則。',
      },
      {
        role: 'user',
        content: `請直接回答3個數字,${description}的郵遞區號,不用回答其他文字,不要標點符號。`,
      },
    ],
    max_tokens: Number(OPENAI_MAX_TOKENS),
  });

  return response.data.choices[0].message.content;
}

module.exports = chatAI;
