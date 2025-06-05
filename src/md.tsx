import Markdown, { Components } from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css';

export const MarkdownView = (props: IProps) => {
    const { value } = props
    return (
        <Markdown
            className={'markdown-body'}
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[
                rehypeRaw,
                [
                    rehypeKatex,
                    {
                        output: 'mathml',
                    },
                ],
            ]}
        //   transformImageUri={transformImageUri}
        //   transformLinkUri={transformLinkUri}

        >
            {value}
        </Markdown>
    );
}