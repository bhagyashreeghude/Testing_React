import { fireEvent, render,screen } from "@testing-library/react";
import App from "./App";


test("Onchange Event Test",()=>{
    render(<App/>)
    const checkOnChange = screen.getByRole("textbox")
    fireEvent.change(checkOnChange,{target:{value:"a"}});
    expect(checkOnChange.value).toBe("a")
})