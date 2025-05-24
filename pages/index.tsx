import React, { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home / 首页" },
    { id: "listening", label: "Listening / 听力" },
    { id: "speaking", label: "Speaking / 口语" },
    { id: "reading", label: "Reading / 阅读" },
    { id: "writing", label: "Writing / 写作" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">IELTS 7.5 Prep Hub / 雅思备考平台</h1>
      <div className="flex space-x-4 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={\`px-4 py-2 rounded border \${tab === t.id ? 'bg-blue-600 text-white' : 'bg-gray-100'}\`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "home" && (
        <div className="space-y-2">
          <p>🎯 Target Score / 目标：Overall 7.5, no band below 6.5</p>
          <p>📆 Exam Date / 考试时间：Early July 2025</p>
          <p>✅ Daily Tasks / 每日任务：Vocabulary, Intensive Listening, Speaking Practice, Writing</p>
          <p>🧠 Recommended Study Time / 推荐学习时间：7 hours per day</p>
        </div>
      )}

      {tab === "listening" && (
        <div className="space-y-2">
          <p className="font-semibold">🎧 Intensive Listening / 精听训练：</p>
          <ul className="list-disc pl-5">
            <li>Cambridge IELTS Sections 1-4 精听</li>
            <li>BBC Learning English Dictation</li>
            <li>VOA Slow English News + Vocabulary</li>
          </ul>
        </div>
      )}

      {tab === "speaking" && (
        <div className="space-y-2">
          <p className="font-semibold">📢 Speaking Practice / 口语训练：</p>
          <ul className="list-disc pl-5">
            <li>Part 1/2/3 Practice Questions</li>
            <li>Recording & Accent Imitation / 模仿native音调</li>
            <li>Answer Structures & Templates / 回答结构</li>
          </ul>
        </div>
      )}

      {tab === "reading" && (
        <div className="space-y-2">
          <p className="font-semibold">📖 Reading Practice / 阅读训练：</p>
          <ul className="list-disc pl-5">
            <li>Wall Street Journal Articles (2 per day)</li>
            <li>Cambridge IELTS Reading Passages</li>
            <li>Inference & Location Strategy</li>
          </ul>
        </div>
      )}

      {tab === "writing" && (
        <div className="space-y-2">
          <p className="font-semibold">✍️ Writing Practice / 写作训练：</p>
          <ul className="list-disc pl-5">
            <li>High-Scoring Sample Essays & Templates</li>
            <li>AI Essay Evaluation / AI评分批改</li>
          </ul>
        </div>
      )}
    </div>
  );
}
