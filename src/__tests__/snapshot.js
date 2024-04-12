import { render } from "@testing-library/react";
import App from "../App";

test("snapshot testing",()=>{
  const view= render(<App/>);
    expect (view).toMatchSnapshot()
})