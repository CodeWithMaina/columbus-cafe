export function TextEffectPerChar({ text }: { text: string }) {
  return (
    <div className="flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fadeIn"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

// Tailwind CSS custom animation styles
const styles = `
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease forwards;
}
`;

export const InjectTextEffectStyles = () => <style>{styles}</style>;
