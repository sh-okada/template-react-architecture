import { useRef, useEffect, useState, useMemo } from "react";
import { EditorState, StateEffect } from "@codemirror/state";
import { EditorView, keymap, placeholder, ViewUpdate } from "@codemirror/view";
import {
  history,
  defaultKeymap,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { StyleSpec } from "style-mod";

type OnChangeDoc = (doc: string) => void;
type EditorStyle = {
  [selector: string]: StyleSpec;
};

type UseMarkdownEditorProps = {
  doc: string;
  onChangeDoc?: OnChangeDoc;
  placeholderText?: string;
  editorStyle?: EditorStyle;
};

const useMarkdownEditor = ({
  doc,
  onChangeDoc,
  placeholderText = "",
  editorStyle = {},
}: UseMarkdownEditorProps) => {
  const editor = useRef(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [view, setView] = useState<EditorView>();

  const customEditorStyle = useMemo(() => {
    return EditorView.theme(editorStyle);
  }, [editorStyle]);

  const updateListener = useMemo(() => {
    return EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged && onChangeDoc) {
        onChangeDoc(update.state.doc.toString());
      }
    });
  }, [onChangeDoc]);

  const extensions = useMemo(() => {
    return [
      placeholder(placeholderText),
      history(),
      keymap.of(defaultKeymap),
      keymap.of(historyKeymap),
      keymap.of([indentWithTab]),
      indentUnit.of("    "),
      EditorView.lineWrapping,
      EditorState.tabSize.of(4),
      markdown({
        base: markdownLanguage,
        completeHTMLTags: false,
      }),
      updateListener,
      customEditorStyle,
    ];
  }, [placeholderText, updateListener, customEditorStyle]);

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

export {
  useMarkdownEditor,
  type UseMarkdownEditorProps,
  type OnChangeDoc,
  type EditorStyle,
};
