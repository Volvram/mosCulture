import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../../../config/colors";
import React from "react";
import { TYPOGRAPHY } from "../../../../config/typography";
import { createEditorJsViewer } from "editorjs-viewer-native";
import { useLocalStore } from "../../../../utils/useLocalStore";
import { PostContentStore } from "../../../../store/PostContentStore";
import { observer } from "mobx-react-lite";
import Paragraph from "./components/Paragraph/Paragraph";
import Header from "./components/Header/Header";
import ImageView from "./components/ImageVeiw/ImageView";

// const EditorJsViewerNative = createEditorJsViewer();

const EditorJsViewerNative = createEditorJsViewer({
    toolsParser: {
      paragraph: {
        CustomComponent: Paragraph,
      },
      header: {
        CustomComponent: Header,
      },
      image: {
        CustomComponent: ImageView,
      }
    },
})

type PostContentProps = {
    postId: number,
    postType: string
}

const PostContent: React.FC<PostContentProps> = ({postId, postType}) => {
    const postContentStore = useLocalStore(() => new PostContentStore(postId, postType));

    React.useEffect(() => {
        postContentStore.requestPost();
    }, []);

    return (
        <View style={styles.content}>
            {postContentStore.post && <EditorJsViewerNative data={JSON.parse(postContentStore.post.content)} />}
        </View>
    )
}

export default observer(PostContent);

const styles = StyleSheet.create({
    content: {
        marginTop: -24,
        paddingTop: 32,
        paddingHorizontal: 16,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 24,
        display: "flex",
        alignItems: "center",
    },
    content_paragraph: {
        ...TYPOGRAPHY.p1,
    }
})