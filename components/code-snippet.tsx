// @ts-nocheck
// add it for docker build

"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { useCallback, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

type Props = {
  content: string;
};

export default function CodeSnippet({ content }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast(
          <div className="flex items-center gap-x-1 font-medium text-feedback-success-500">
            <CheckCircle2 size={20} />
            <span>Copied to clipboard</span>
          </div>,
        );
      })
      .catch((error) => {
        toast(
          <div className="flex items-center gap-x-1 font-medium text-feedback-error-500">
            <XCircle size={20} />
            <span>{error ?? "Failed to copy"}</span>
          </div>,
        );
      });
  }, []);

  return (
    <div className="rounded-2xl bg-primary-neutral-950 p-1">
      <div className="w-full">
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
        >
          {content}
        </SyntaxHighlighter>
      </div>
      <Button
        size="xs"
        className="mb-1 ml-1 bg-primary-neutral-700 text-xs font-medium text-primary-base-white hover:bg-primary-neutral-700"
        onClick={() => handleCopy(content)}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
