# 🏝️ Southwind CSS

## Description

Southwind is css framework that combines the ease of use of **Tailwind** with the reusability of **SASS**. Write all your styles in one file if you like, and keep your HTML clean and readable. You can easily create themes and components and sharing them is easy.

Before

    <div class="rounded-lg p-3 pr-5 cursor-pointer font-bold pt-4 text-large">
      Click Me
    </div>

    <div class="bg-green-500 rounded-lg p-3 pr-5 cursor-pointer font-bold pt-4 text-large">
      Click Me 2
    </div>

After

    <div class="btn">Click Me</div>
    <div class="btn green">Click Me 2</div>

    .btn {
      brad-5 p-3 pl-5 pr-5 pointer fw-6 pt-3 fs-3 bg-blue-5
      &.green { bg-green-5 }
    }

## Benefits 

- 😎 **Any Values Work** - Instead of having to remember Tailwind's intervals Southwind uses a simple 1-infinite number system. ex.`fs-250 mt-17`
- 🌍 **Easy Global Changes** - Want to change all your buttons across the site? No problem! Just change the style in your Southwind file and it propgates globally!
- 💁 **Benefits of SASS** - SASS can make organizing your code extremely helpful. You can nest as many levels deep as needed, it makes it easy to change everything related to one component in one place.
- 👨‍💻️ **Uncluttered HTML** - Tailwind is fantastic but it can leave your HTML littered with dozens of classes, sometimes all on the same div. You can still use inline classes here but for the heavy lifting it's easy to use Southwind to make reusable components.
- 👨‍🏫️ **Familiar Class Names** - If you know CSS then Southwind will be easy. Font Size is `fs-x` (x = 1-to-infinite) , `fw-x` (x = 1-8) ,Text align center is `ta-c`.
- 🎸 **Themeable** - Want to use multiple projects with the same theme? Now you can. Your Southwind file can go anywhere.
- 🎮 **Works with Plain HTML and all Frameworks** - All you have to do is include Southwind javascript file and you are good to go. Use it VIA CDN or NPM package. It also has a native **React** component (works with **Solid** too!)
- ⌨️ **Less Typing** - Tailwind can be a bit verbose, we aim for fewer keystrokes.
- 🌊 **Supports Responsive Layouts And Focus States** - You can use SW to easily accomplish this with the `sm:mt-5` prefix. You can also support hover it through native CSS with `.some-class:hover { bg-blue-5}` or `hover:bg-blue-5`
- 👶 **Small Size** - The distributed version is only 5.7k!

## Installation 

    npm install southwind

## Usage

**React/Solid**

    import SW from "southwind/react-component";

    // Add this tag and feed it your Southwind script. Generally you should put this in another file and give it as a variable.
    <SW code={`.component { bg-red-8 fc-white fs-55 } `} />

**Using as a Javascript function**
    
    // Use as a script as below or just add the dist/swcss.js as an external script
    import Southwind from "southwind"

    Southwind.processSWScript('`.component { bg-red-8 fc-white fs-55 } ')

    

## Basics

*an x below means you can use any number*

#### Fonts & Text

| Tag           | For           | Range | 
| ------------- | ------------- | -------- | 
| fs-x         | Font Size     | `fs-1` to `fs-(any)` | 
| fw-x         | Font Weight   | `fw-1` to `fw-9` |
| fc-blue-x    | Font Color    | `fc-color-1` to `fc-color-9` |
| lh-x         | Line Height   | `lh-0` to `lh-(any)` |

#### Margin and Padding

*Note these also support negative values `-mt-5`*

| Tag           | For           | Range | 
| ------------- | ------------- | -------- | 
| mt-x         | Margin Top     | `mt-0` to `mt-(any)` | 
| ml-x         | Margin Left     | `ml-0` to `ml-(any)` | 
| mr-x         | Margin Right    | `mr-0` to `mr-(any)` | 
| mb-x         | Margin Bottom     | `mb-0` to `mb-(any)` | 
| pt-x         | Padding Top     | `pt-0` to `pt-(any)` | 
| pl-x         | Padding Left     | `pl-0` to `pl-(any)` | 
| pr-x         | Padding Right    | `pr-0` to `pr-(any)` | 
| pb-x         | Padding Bottom     | `pb-0` to `pb-(any)` | 

| fw-x         | Font Weight   | `fw-1` to `fw-9` |
| fc-blue-x    | Font Color    | `fc-color-1` to `fc-color-9` |
| lh-x         | Line Height   | `lh-0` to `lh-(any)` |