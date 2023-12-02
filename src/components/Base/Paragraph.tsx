import { body, body2 } from '../../utils/typography';

interface ParagraphProps {
  type: 'body' | 'bodySmall';
  content: string | number;
  isLightTheme?: boolean;
  className?: string;
}

const Paragraph = ({ type, content, className = '' }: ParagraphProps) => {
  return (
    <>
      {type === 'body' ? (
        <p className={`${body} ${className} `}>{content}</p>
      ) : (
        <p className={`${body2} ${className}`}>{content}</p>
      )}
    </>
  );
};
export default Paragraph;
