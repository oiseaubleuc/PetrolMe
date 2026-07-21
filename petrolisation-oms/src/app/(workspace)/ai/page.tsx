"use client";

import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PriorityBadge } from "@/components/ui/StatusBadge";
import { Meter } from "@/components/ui/Meter";
import {
  aiCapabilities,
  aiConversation,
  aiInsights,
  type AiMessage,
} from "@/lib/data/ai";

export default function AiPage() {
  const [messages, setMessages] = useState<AiMessage[]>(aiConversation);
  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: AiMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
      time: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
    };
    const reply: AiMessage = {
      id: `a-${Date.now()}`,
      role: "assistant",
      content:
        "I’ve cross-checked production, maintenance and inventory signals. The highest-leverage action remains inspecting CMP-SFY-088 within 48 hours, then expediting SP-SEAL-2201. I can open a work order or draft a briefing for the COO — which would you prefer?",
      time: userMsg.time,
    };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  };

  return (
    <div>
      <PageHeader
        title="AI Operations Assistant"
        description="Predictive maintenance, production forecasting, failure detection, risk analysis and natural-language search across the enterprise."
        meta={
          <>
            <Badge tone="flare" dot pulse>
              Model online
            </Badge>
            <Badge tone="info">Petrolisation AI · v3.2</Badge>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {aiCapabilities.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-line bg-ink-900/50 p-4 transition-colors hover:border-line-strong"
          >
            <div className="flex items-center gap-2 text-flare-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-sm font-semibold text-white">{c.title}</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{c.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.25fr_1fr]">
        <Panel className="flex min-h-[520px] flex-col">
          <PanelHeader
            title="Conversation"
            subtitle="Natural language operations workspace"
            icon={<Bot className="h-4 w-4" />}
          />
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-flare-500/15 text-slate-100 border border-flare-500/25"
                      : "bg-ink-850 text-slate-300 border border-line"
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    <span>{m.role === "user" ? "You" : "Petrolisation AI"}</span>
                    <span>{m.time}</span>
                  </div>
                  <div className="whitespace-pre-wrap">{m.content}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-line p-4">
            <div className="flex items-center gap-2 rounded-xl border border-line bg-ink-850/80 px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about assets, production risk, inventory…"
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              />
              <Button size="sm" variant="primary" onClick={send}>
                <Send className="h-3.5 w-3.5" />
                Send
              </Button>
            </div>
            <p className="mt-2 text-[10px] text-slate-600">
              Demo responses are illustrative. Developed by Hohosolutions.
            </p>
          </div>
        </Panel>

        <Panel>
          <PanelHeader title="Priority Insights" subtitle="Ranked by operational impact" />
          <ul className="divide-y divide-line/70">
            {aiInsights.map((ins) => (
              <li key={ins.id} className="px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="neutral">{ins.module}</Badge>
                      <PriorityBadge priority={ins.impact === "high" ? "high" : ins.impact === "medium" ? "medium" : "low"} />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">{ins.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{ins.detail}</p>
                  </div>
                  <div className="w-16 shrink-0 text-right">
                    <div className="text-sm font-semibold text-white">{ins.confidence}%</div>
                    <Meter value={ins.confidence} className="mt-1" tone="flare" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
