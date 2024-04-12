import {fireEvent, render , screen} from "@testing-library/react"
import App from "./App"

beforeAll(()=>{
  console.log("**************before All**************")
})

beforeEach(()=>{
  console.log("**************before Each**************")
})
test ("hi ,it's 1 test case",()=>{
  console.log("1")
  render(<App/>)
  const text=screen.getByText(/First react test case/i);
  const title = screen.getByTitle("nature-img")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test("Onchange Event Test",()=>{
  console.log("2")
  render(<App/>)
  const checkOnChange = screen.getByRole("textbox")
  fireEvent.change(checkOnChange,{target:{value:"a"}});
  expect(checkOnChange.value).toBe("a")
})

test ("click event test case",()=>{
  console.log("3")
  render(<App/>)
  const btn = screen.getByRole("button")
  fireEvent.click(btn)
  expect(screen.getByText("update Data")).toBeInTheDocument();
})

afterAll(()=>{
  console.log("**************after All**************")
})
afterEach(()=>{
  console.log("_________________after Each____________")
})