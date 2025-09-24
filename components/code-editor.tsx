"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeEditorProps {
  code: string
  language?: string
  title?: string
  collapsible?: boolean
  previewLines?: number
}

export function CodeEditor({ 
  code, 
  language = "xml", 
  title, 
  collapsible = false,
  previewLines = 3 
}: CodeEditorProps) {
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(!collapsible)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getPreviewCode = () => {
    if (!collapsible || isExpanded) return code
    
    const lines = code.split('\n')
    if (lines.length <= previewLines) return code
    
    return lines.slice(0, previewLines).join('\n') + '\n  ...'
  }

  const getCodeToShow = () => {
    return getPreviewCode()
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card className="bg-slate-950 border-slate-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {title && <span className="text-sm text-slate-400 ml-4">{title}</span>}
        </div>
        <div className="flex items-center gap-2">
          {collapsible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpanded}
              className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
      </div>
      <CardContent className="p-0">
        <div className={`overflow-x-auto transition-all duration-300 ease-in-out ${
          collapsible && !isExpanded ? 'max-h-32' : ''
        }`}>
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.5'
            }}
            codeTagProps={{
              style: {
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
              }
            }}
          >
            {getCodeToShow()}
          </SyntaxHighlighter>
        </div>
        {collapsible && !isExpanded && (
          <div className="px-4 pb-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpanded}
              className="text-slate-400 hover:text-slate-200 hover:bg-slate-800 w-full justify-center"
            >
              <span className="mr-2">Show full prompt</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}