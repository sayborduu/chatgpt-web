import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f47e",
    name: "GPT-4",
    context: [],
    modelConfig: {
      model: "gpt-4-poe",
      temperature: 0.5,
      max_tokens: 8000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "es",
    builtin: true,
  },
{
    avatar: "1f47e",
    name: "claude-instant-100k",
    context: [],
    modelConfig: {
      model: "claude.instant-100k",
      temperature: 0.5,
      max_tokens: 100000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "es",
    builtin: true,
  },
];
