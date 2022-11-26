# 🏝️ Southwind CSS

## Description

Southwind is css framework that combines the ease of use of **Tailwind** with the reusability of **SASS**. Write all your styles in one file if you like, and keep your HTML clean and readable. You can easily create themes and components and sharing them is easy.

Before

    <div class="rounded-lg p-3 pr-5 cursor-pointer font-bold pt-4 text-large">
      Some Text
    </div>

After

    <div class="btn">

    .btn {
      brad-5 p-3 pl-5 pr-5 pointer fw-6 pt-3 fs-3
    }

## Benefits 

- 😎 **Any Values Work** - Instead of having to remember Tailwind intervals Southwind uses a simple 1-infinite number system. ex. **fs-250 mt-17**
- 🌍 **Easy Global Changes** - Want to change all your buttons across the site? No problem! Just change the style in your Southwind file and it propgates globally!
- 😜 **Benefits of SASS** - SASS can make organizing your code extremely helpful. You can
nest as many levels deep as needed, it makes it easy to change everything related to one component in one place.
- 👨‍💻️ **Uncluttered HTML** - Tailwind is fantastic but it can leave your HTML littered with dozens of classes, sometimes all on the same div. You can still use inline classes here but for the heavy lifting it's easy to use Southwind to make reusable components.
- 👨‍🏫️ **Familiar Class Names** - If you know CSS then Southwind will be easy. Font Size is **fs-x(x = 1-to-infinite)** , **fw-x(x = 1-8)** ,Text align center is **ta-c**.
- 🎸 **Themeable** - Want to use multiple projects with the same theme? Now you can.Your Southwind file can go anywhere.