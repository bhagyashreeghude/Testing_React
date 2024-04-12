import {fireEvent, render , screen} from "@testing-library/react"
import App from "./App"

test ("hi ,it's 1 test case",()=>{
  render(<App/>)
  const text=screen.getByText(/First react test case/i);
  const title = screen.getByTitle("nature-img")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test("Onchange Event Test",()=>{
  render(<App/>)
  const checkOnChange = screen.getByRole("textbox")
  fireEvent.change(checkOnChange,{target:{value:"a"}});
  expect(checkOnChange.value).toBe("a")
})

test ("click event test case",()=>{
  render(<App/>)
  const btn = screen.getByRole("button")
  fireEvent.click(btn)
  expect(screen.getByText("update Data")).toBeInTheDocument();
})