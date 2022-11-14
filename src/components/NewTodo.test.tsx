import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTodo from "./NewTodo";

describe("NewTodo form component", () => {
  it("renders an input", () => {
    render(<NewTodo />);
    const todoTextInput = screen.getByRole("textbox");
    expect(todoTextInput).toBeInTheDocument();
  });

  it("renders an empty input", () => {
    render(<NewTodo />);
    const todoTextInput = screen.getByRole("textbox");
    expect(todoTextInput.nodeValue).toBeNull;
  });

  it("renders a submit button", () => {
    render(<NewTodo />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  it("renders a disabled submit button", () => {
    render(<NewTodo />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });

  it("allows entering a text", () => {
    render(<NewTodo />);
    const todoTextInput = screen.getByRole("textbox") as HTMLInputElement;
    const testValue = "Learn React";
    // userEvent.type(todoTextInput, testValue); // Also works
    fireEvent.change(todoTextInput, { target: { value: testValue } });
    expect(todoTextInput.value).toBe(testValue);
  });

  it("enables the submit button on input change ", () => {
    render(<NewTodo />);
    const todoTextInput = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(todoTextInput, "test");
    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toBeDisabled();
  });
});
