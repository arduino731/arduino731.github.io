
$${\color{red}Welcome \space \color{#2048f7}to \space \color{orange}van-vlymen-paws-portfolio}$$

My specialized portfolio displays exceptional work with a minimalist yet impactful design. Created with React, Next.js, and WindTail CSS, it's hosted on GitHub Actions for swift modern website development.


## 🛠 Development Workflow

This project uses a two-branch system to separate **Source Code** from **Production Builds**.

### 🌿 Branch Strategy

| Branch | Purpose | Key Contents |
| :--- | :--- | :--- |
| **`main`** | **Development** | React components (`.tsx`), Tailwind config, and logic. **Always work here.** |
| **`gh-pages`** | **Deployment** | Compiled static assets (`html`, `css`, `js`). **Never edit manually.** |



### 🚀 How to Develop and Deploy

1. **Check your branch:**
   Ensure you are on the `main` branch before starting:
   ```bash
   git branch
   # If not on main, run: git checkout main
   ```

2. **Run Development Server:**
  Since the project is hosted in **WSL (Linux Home)** for maximum performance:
    ```bash
    npm run dev
    ```


3. **Deploy to GitHub Pages:**
   When you are ready to push your changes live, run:
    ```bash
    npm run deploy
    ```

*This script automatically runs `next build`, exports the project to the `/out` folder, and pushes those static files to the `gh-pages` branch.*

### ⚠️ Important Reminders

* **Don't touch `gh-pages` branch:** Manual changes there will be overwritten the next time you run the deploy script.
* **WSL Performance:** Always run this project from the Linux filesystem (`~/projects/...`) to ensure Hot Module Replacement (HMR) works instantly.

### How to save these changes to GitHub

Once you have pasted the text above into your `README.md` file, run these commands in your WSL terminal to update your repository:

1. **Stage the file:**

    ```bash
    git add README.md
    ```

2. **Commit the change:**
    ```bash
    git commit -m "docs: update development workflow in readme"
    ```


3. **Push to GitHub:**
    ```bash
    git push origin main
    ```





