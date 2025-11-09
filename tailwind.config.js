import daisyui from "daisyui";

export default {
    content: [
    "./src/**/*.html",
    "./src/**/*.js",
    // tambahkan ekstensi lain jika perlu
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ["dark", "light"], // daftar theme yang diizinkan
    darkTheme: "dark", // ini memastikan theme dark digunakan
    base: true,
  },
}