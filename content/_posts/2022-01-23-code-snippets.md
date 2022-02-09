---
author: drew
comments: true
date: 2021-06-21 00:00:16+00:00
layout: post
title: 'Code Snippets to streamline your work'
tags:
- RStudio
- coding
- snippets
- efficiency
---

I often used the CTRL+SHIFT+R hotkey to generate sections in my code. A dialog box would pop-up for you to insert the label for the section, then it would automatically generate a commented string with you desired label and repeated dashes to the width of your margin setting (default 80; see `Tools > Global Options > Code > Display`). In the editor, it would look like this:

```{r}
# label ------------------------------------------------------------------------
```

However, the format of the string is not modifiable. R has native support for [sections](https://support.rstudio.com/hc/en-us/articles/200484568-Code-Folding-and-Sections-in-the-RStudio-IDE) using either `-`, `=`, or `#`, and these may be visually preferable to users. For instance, a user might prefer having a few characters preceding the label so as to make it more visible alongside `roxygen2` blocks (which start with `#'`). In my last few projects, I just copied and pasted a section label in the format I wanted, then added the label manually, but this was somewhat tedious.

A user-modifiable format for section labels has been [suggested before](https://community.rstudio.com/t/modify-insert-section-result/17116), but [hasn't been implemented yet](https://github.com/rstudio/rstudio/issues/7480). Another user was looking for a [similar solution](https://stackoverflow.com/questions/28795128/change-rstudio-shortcut-for-insert-section) to fix errors with `knitr`, and was pointed towards using code snippets.

Most users have seen code snippets, whether they realize it or not. By default, if you start writing a function, a box pops up beside the cursor to suggest possible elements you might be typing (e.g., functions, variables). You can click the respective element you want, and the editor will auto-complete that element. For certain functions, there exist built-in snippets that can do more than just complete the function name, but instead will generate a skeleton for its functionality. This can be seen for common commands like `if` and `for`, and even for multiple argument functions like `vapply`. Typing 'vapply', then hitting `SHIFT+TAB` will generate the code skeleton for `vapply`

<p align="center">
<img src="/assets/images/2022-01-23-code-snippets/code-snippets-1.jpg" alt="Vapply code snippet pop-up">
</p>
<p align="center">
<img src="/assets/images/2022-01-23-code-snippets/code-snippets-2.jpg" alt="Vapply code snippet in editor">
</p>

The list of built-in functions can be found in `Tools > Global Options > Code > Edit Snippets...`.

<p align="center">
<img src="/assets/images/2022-01-23-code-snippets/code-snippets-3.jpg" alt="RStudio code snippets">
</p>

This text box is editable, meaning that the user can add on their own code snippets. A basic overview can be found on [RStudio support](https://support.rstudio.com/hc/en-us/articles/204463668-Code-Snippets-in-the-RStudio-IDE#:~:text=Code%20snippets%20are%20text%20macros,inserts%20an%20R%20function%20definition%3A&text=Other%20useful%20snippets%20include%3A,library%2C%20require%2C%20and%20source%20functions).

Now the explanations are done, back to the original use case. I prefer to have equal signs instead of dashes, and I like to have a few leading equal signs after the # to better separate from text directly below it. With my solution, using the $$ operator in the snippet, I can simple type `sect-`, add my label, click `SHIFT+TAB`, and it will auto-create my formatted section label to my preferred width (120 characters):

```{r}
snippet sect-
    `r strtrim(paste("#====",parse(text = "$$"),strrep("=",150)),120)`
```

```{r}
#==== label ====================================================================
```

The big limitation is that you can't use any `space` characters in the label. I use this primarily for function names, and separating sections in a function like validation, code, or logic, so it serves sufficiently well until a similar functionality is included with RStudio. However, there may be a solution to this using custom keyboard shortcuts, but I'll explore that in a future post.

For some of the snippets I use day-to-day, check out [here](https://github.com/knacko/Rsnippets).
