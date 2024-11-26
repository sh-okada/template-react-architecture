import { useRef, useEffect, useState, useMemo } from "react";
import { EditorState, StateEffect } from "@codemirror/state";
import { EditorView, keymap, placeholder } from "@codemirror/view";
import {
  history,
  defaultKeymap,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import {
  indentUnit,
  HighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { tags } from "@lezer/highlight";

type UseMarkdownEditorProps = {
  doc: string;
  // setDoc: Dispatch<SetStateAction<string>>;
  togglePreview?: () => void;
};

const highlightStyle = HighlightStyle.define([
  { tag: tags.heading1, color: "black", fontSize: "1.4em", fontWeight: "700" },
  { tag: tags.heading2, color: "black", fontSize: "1.3em", fontWeight: "700" },
  { tag: tags.heading3, color: "black", fontSize: "1.2em", fontWeight: "700" },
  { tag: tags.heading4, color: "black", fontSize: "1.1em", fontWeight: "700" },
  { tag: tags.strong, color: "black", fontWeight: "700" },
  { tag: tags.quote, color: "#6a737d" },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.url, textDecoration: "underline" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
]);

const useMarkdownEditor = ({ doc, togglePreview }: UseMarkdownEditorProps) => {
  const editor = useRef(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [view, setView] = useState<EditorView>();
  const customKeymap = useMemo(() => {
    return keymap.of([
      {
        key: "Mod-p",
        run() {
          if (togglePreview) {
            togglePreview();
          }
          return true;
        },
      },
    ]);
  }, [togglePreview]);
  const editorStyle = useMemo(() => {
    return EditorView.theme({
      "&": {
        minHeight: "500px",
      },
      "&.cm-editor": {
        outline: "none",
      },
      "&.cm-editor .cm-scroller": {
        "-webkit-font-smoothing": "antialiased",
        letterSpacing: "0.02em",
        fontSize: "15px",
        lineHeight: "1.8",
        color: "#000000",
      },
      ".cm-selectionBackground": {
        backgroundColor: "#036dd626 !important",
      },
    });
  }, []);
  // const updateListener = useMemo(() => {
  //   return EditorView.updateListener.of((update: ViewUpdate) => {
  //     if (update.docChanged) {
  //       setDoc(update.state.doc.toString());
  //     }
  //   });
  // }, [setDoc]);

  const extensions = useMemo(() => {
    return [
      placeholder("本文"),
      history(),
      keymap.of(defaultKeymap),
      keymap.of(historyKeymap),
      keymap.of([indentWithTab]),
      indentUnit.of("    "),
      EditorView.lineWrapping,
      EditorState.tabSize.of(4),
      syntaxHighlighting(highlightStyle),
      markdown({
        base: markdownLanguage,
        completeHTMLTags: false,
      }),
      editorStyle,
      customKeymap,
      // updateListener,
    ];
  }, [customKeymap, editorStyle]);

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [setContainer]);

  useEffect(() => {
    if (!view && container) {
      const state = EditorState.create({
        doc: doc,
        extensions: extensions,
      });
      const viewCurrent = new EditorView({
        state,
        parent: container,
      });
      setView(viewCurrent);
    }
  }, [view, container, doc, extensions]);

  useEffect(() => {
    if (view) {
      view.dispatch({ effects: StateEffect.reconfigure.of(extensions) });
    }
  }, [view, extensions]);

  return {
    editor,
  };
};

export { useMarkdownEditor, type UseMarkdownEditorProps };
