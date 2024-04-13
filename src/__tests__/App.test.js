import {screen,render} from "@testing-library/react"
import App from "../App"

test("tesing RTL query",()=>{
  render(<App/>)
  const inputField =  screen.getByRole("textbox")
  const btn =  screen.getByRole("button")

  expect(inputField).toBeInTheDocument()
  expect(inputField).toHaveValue("good")
  expect(inputField).toBeDisabled()
  expect(btn).toBeInTheDocument()
})

