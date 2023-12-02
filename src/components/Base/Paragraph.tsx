import { body, body2, bodyLarge } from '../../utils/typography';

interface ParagraphProps {
  type: 'bodyLarge' | 'body' | 'bodySmall';
  content: string | number;
  isLightTheme?: boolean;
  className?: string;
}

const Paragraph = ({ type, content, className = '' }: ParagraphProps) => {
  const getParagraphType = ({ type, content }: ParagraphProps) => {
    switch (type) {
      case 'bodyLarge':
        return <p className={`${bodyLarge} ${className}`}>{content}</p>;
      case 'body':
        return <p className={`${body} ${className}`}>{content}</p>;
      case 'bodySmall':
        return <p className={`${body2}${className}`}>{content}</p>;
    }
  };
  return getParagraphType({ type, content, className });
};
export default Paragraph;
