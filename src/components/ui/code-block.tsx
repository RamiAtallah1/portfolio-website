import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  fileName: string;
  code: string;
  language?: string;
};

export default function CodeBlock({
  fileName,
  code,
  language = "javascript",
}: CodeBlockProps) {
  return (
    <div className="w-full max-w-full md:max-w-[450px] mx-auto">
      <div className="bg-[#091121] border-2 border-indigo-600 rounded-lg overflow-hidden">
        <div className="flex items-center gap-4 p-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="ml-2 text-sm text-gray-400 flex items-center gap-2 truncate">
            {fileName}
          </span>
        </div>
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            wrapLongLines={false}
            customStyle={{
              margin: 0,
              padding: "16px",
              fontSize: "clamp(0.7rem, 2.5vw, 0.8rem)",
              minWidth: "fit-content",
              background: "transparent",
            }}
            codeTagProps={{
              style: {
                fontSize: "inherit",
              },
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
