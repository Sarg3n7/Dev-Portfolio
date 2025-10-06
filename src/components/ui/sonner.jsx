// import { useTheme } from "next-themes";
// import { Toaster as Sonner, toast } from "sonner";

// const Toaster = ({ ...props }) => {
//   const { theme = "system" } = useTheme();

//   return (
//     <Sonner
//       theme={theme}
//       className="toaster group"
//       toastOptions={{
//         classNames: {
//           toast:
//             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-[hsl(var(--border))] group-[.toaster]:shadow-lg",
//           description: "group-[.toast]:text-muted-foreground",
//           actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
//           cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
//         },
//       }}
//       {...props}
//     />
//   );
// };

// export { Toaster, toast };




import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            // 🔁 replaced token utilities with literal HSL-based ones
            "group toast " +
            "group-[.toaster]:bg-[hsl(var(--background))] " +    /* 🔁 */
            "group-[.toaster]:text-[hsl(var(--foreground))] " +   /* 🔁 */
            "group-[.toaster]:border-[hsl(var(--border))] " +     /* already updated earlier */
            "group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[hsl(var(--muted-foreground))]", /* 🔁 */
          actionButton: "group-[.toast]:bg-[hsl(var(--primary))] group-[.toast]:text-[hsl(var(--primary-foreground))]", /* 🔁 */
          cancelButton: "group-[.toast]:bg-[hsl(var(--muted))] group-[.toast]:text-[hsl(var(--muted-foreground))]",     /* 🔁 */
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
