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

I often used the CTRL+SHIFT+R hotkey to generate sections in my code. A dialog box would pop-up for you to insert the label for the section, then it would automatically insert a string into the editor in the form of:

```{r}
# label -----------------------------------------------
```

This label would be set to the width of your margin setting (default 80; see Tools > Global Options > Code > Display).

However, the format used here is not modifiable. R natively has support to [generate sections](https://support.rstudio.com/hc/en-us/articles/200484568-Code-Folding-and-Sections-in-the-RStudio-IDE) with either `-`, `=`, or `#`, and these may be preferable to users. As well, a user might prefer having a few characters preceding the label so as to make it more visble alongside `roxygen2` blocks (which start with `#'`). This change has been [suggested](https://community.rstudio.com/t/modify-insert-section-result/17116) before, but [hasn't been implemented yet](https://github.com/rstudio/rstudio/issues/7480).

A solution I found was using code snippets:

```{r}
snippet sect-
    `r strtrim(paste("#",parse(text = "$$"),strrep("#",150)),120)`
```

Within the editor, if you type `sect-mySection
