import { useForm } from "react-hook-form";

import { Button } from "./components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";

function App() {
  const form = useForm<{ name: string }>({
    mode: "onBlur",
    defaultValues: { name: "aiful" },
  });
  const onSubmit = (data: { name: string }) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "入力してください" }}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className="w-[200px] my-[10px]" />
              </FormControl>
              <FormMessage>{fieldState.error?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button variant="outline" type="submit" className="hover:bg-sky-200">
          OUTLINE
        </Button>
      </form>
    </Form>
  );
}

export default App;
