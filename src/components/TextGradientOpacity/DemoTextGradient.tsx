// import Paragraph from "./Pragraph";
import Word from "./Character";
import Charcater from "./Character";
// import Word from "./Word";

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function DemoTextGradient() {
  return (
    <main className="bg-black text-white">
      <div className="h-screen"></div>
      {/* <Word value={paragraph} /> */}
      <Word value={paragraph} />
      <div className="h-screen"></div>
    </main>
  );
}
