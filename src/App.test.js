import { render , screen} from "@testing-library/react"
import App from "./App"

test ("hi ,it's 1 test case",()=>{
  render(<App/>)
  const text=screen.getByText(/First react test case/i);
  const title = screen.getByTitle("nature-img")
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test ("hello, it's 2 test case",()=>{
  render(<App/>)
  const checkInput = screen.getByRole("textbox")
  const checkInputPlaceHolder = screen.getByPlaceholderText("user name")
  expect (checkInput).toBeInTheDocument()
  expect(checkInputPlaceHolder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("name","user-name")
  expect(checkInput).toHaveAttribute("id","user-id")
}) 

describe.only("UI test case group", ()=>{
  test("here test case 1",()=>{
    render(<App/>)
    const checkInput2= screen.getByRole("textbox")
    expect (checkInput2).toHaveAttribute("name","user-name")
  })
  test("here test case 2",()=>{
    render(<App/>)
    const checkInput2= screen.getByRole("textbox")
    expect (checkInput2).toHaveAttribute("name","user-name")
  })
  test("here test case 3",()=>{
    render(<App/>)
    const checkInput2= screen.getByRole("textbox")
    expect (checkInput2).toHaveAttribute("name","user-name")
  })
})


describe.only("API test case group", ()=>{
  test("api case group",()=>{
    render(<App/>)
    const checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","user-name")
  })
  test("api case group 2",()=>{
    render(<App/>)
    const checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","user-name")
  })
  test("api case group 3",()=>{
    render(<App/>)
    const checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","user-name")
  })

  describe.only("inner API test case group", ()=>{
    test("api case group",()=>{
      render(<App/>)
      const checkInput = screen.getByRole("textbox")
      expect(checkInput).toHaveAttribute("name","user-name")
    })
    test("api case group 2",()=>{
      render(<App/>)
      const checkInput = screen.getByRole("textbox")
      expect(checkInput).toHaveAttribute("name","user-name")
    })
    test("api case group 3",()=>{
      render(<App/>)
      const checkInput = screen.getByRole("textbox")
      expect(checkInput).toHaveAttribute("name","user-name")
    })
    
  })
})