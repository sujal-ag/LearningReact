import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const passwordref = useRef(null);

  //can use callback as well for optimisation
  function copy() {
    passwordref.current?.select(password);
    // passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
  }

  const password_generator = useCallback(() => {
    let pass = "";
    let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let requiredChars = "";

    if (number) {
      s += "0123456789";
      requiredChars += "0123456789".charAt(Math.floor(Math.random() * 10));
    }

    if (character) {
      s += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      requiredChars += symbols.charAt(
        Math.floor(Math.random() * symbols.length)
      );
    }

    for (let i = 0; i < length - requiredChars.length; i++) {
      let pos = Math.floor(Math.random() * s.length);
      pass += s.charAt(pos);
    }

    pass += requiredChars;

    setPassword(pass);
  }, [length, number, character,setPassword]);

  // function copy(){
  //   window.navigator.clipboard.writeText(password);
  // }

  useEffect(() => {
    password_generator();
  }, [password_generator]);

  return (
    <div className="w-full h-screen bg-black flex flex-wrap justify-center items-center">
      <div
        className="bg-gray-600 h-[200px] 
      w-[600px] rounded-2xl flex flex-wrap justify-center items-start p-5"
      >
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="px-2 py-3 w-[400px] rounded-l-xl mt-6"
          readOnly
          ref={passwordref}
        />
        <button
          className="bg-blue-600 px-4 py-3 rounded-r-xl mt-6 shrink-0"
          onClick={copy}
        >
          Copy
        </button>

        <div className="flex justify-start mt-4 gap-4 text-orange-400">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label>length: {length}</label>

          <div>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label> Numbers </label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={character}
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label> Characters </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
