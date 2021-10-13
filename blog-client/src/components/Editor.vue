<template>
  <EditorContent :editor="editor"></EditorContent>
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import {watch} from 'vue'

export default {
  components: {
    EditorContent,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    teaserValue: {
      type: String,
      default: '',
    },
  },

  setup(props, { emit }) {
    const editor = useEditor({
      content: props.modelValue,
      extensions: [
        StarterKit,

      ],

      editorProps: {
        attributes: {
          class: 'prose prose-sm sm:prose lg:prose mx-auto focus:outline-none',
        }
      },

      onUpdate: (context) => {
        const teaser = context.editor.state.doc.content.content.find(
          c => c.type.name === "paragraph"
        )
        console.log(teaser.textContent)

        emit('update:teaserValue', teaser.textContent)

        emit('update:modelValue', context.editor.getHTML())
      }
    })

    watch(() => props.modelValue, (value) => {
        if (editor.value.getHTML() === value) {
          return
        }

        editor.value.commands.setContent(props.modelValue)
    })

    return {
      editor
    }
  },
}
</script>
