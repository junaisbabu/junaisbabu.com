import { AvatarDemo } from "./ui/avatar/avatar-demo";

const HTML = "/skills/html.svg";
const CSS = "/skills/css.svg";
const JS = "/skills/javascript.svg";
const React = "/skills/reactjs.svg";
const Next = "/skills/nextjs.svg";
const Vue = "/skills/vue-js.svg";
const Tailwind = "/skills/tailwind-css.svg";
const MUI = "/skills/material-ui.svg";
const Bootstrap = "/skills/bootstrap.svg";
const Postgres = "/skills/postgres.svg";
const Mongo = "/skills/mongodb.svg";
const SQL = "/skills/my-sql.svg";
const Node = "/skills/node-js.svg";
const Express = "/skills/express-js.svg";
const Firebase = "/skills/firebase.svg";
const Windows = "/skills/windows.svg";
const Linux = "/skills/linux.svg";
const Mac = "/skills/mac.svg";

const StyleDiv = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
    {children}
  </div>
);

function Skills() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xs text-zinc-500 mb-2">Frontend</h2>
        <div className="flex flex-wrap gap-4">
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={HTML} alt="HTML" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={CSS} alt="CSS" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo
              className="w-7 h-7 bg-[#FED602]"
              image={JS}
              alt="Javascript"
            />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo
              className="w-7 h-7 bg-white dark:bg-zinc-100"
              image={Next}
              alt="Next JS"
            />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={React} alt="React JS" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Vue} alt="Vue JS" />
          </StyleDiv>
        </div>
      </div>
      <div>
        <h2 className="text-xs text-zinc-500 mb-2">UI Framework</h2>
        <div className="flex flex-wrap gap-4">
          <StyleDiv>
            <AvatarDemo
              className="w-7 h-7"
              image={Tailwind}
              alt="Tailwind CSS"
            />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Bootstrap} alt="Bootstrap" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={MUI} alt="MUI" />
          </StyleDiv>
        </div>
      </div>
      <div>
        <h2 className="text-xs text-zinc-500 mb-2">Backend</h2>
        <div className="flex flex-wrap gap-4">
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Node} alt="Node JS" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo
              className="w-7 h-7 bg-white dark:bg-zinc-100"
              image={Express}
              alt="Express JS"
            />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Mongo} alt="Mongo DB" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Postgres} alt="Postgres" />
          </StyleDiv>
          {/* <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={SQL} alt="My SQL" />
          </StyleDiv> */}
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Firebase} alt="Firebase" />
          </StyleDiv>
        </div>
      </div>
      <div>
        <h2 className="text-xs text-zinc-500 mb-2">OS</h2>
        <div className="flex flex-wrap gap-4">
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Mac} alt="Mac" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Linux} alt="Linux" />
          </StyleDiv>
          <StyleDiv>
            <AvatarDemo className="w-7 h-7" image={Windows} alt="Windows" />
          </StyleDiv>
        </div>
      </div>
    </div>
  );
}

export default Skills;
