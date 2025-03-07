import searchReplace from 'markdownlint-rule-search-replace'

import { codeFenceLineLength } from './code-fence-line-length.js'
import { imageAltTextEndPunctuation } from './image-alt-text-end-punctuation.js'
import { imageFileKebab } from './image-file-kebab.js'
import { incorrectAltTextLength } from './image-alt-text-length.js'
import { internalLinksLang } from './internal-links-lang.js'
import { internalLinksSlash } from './internal-links-slash.js'
import { imageAltTextExcludeStartWords } from './image-alt-text-exclude-start-words.js'
import { listFirstWordCapitalization } from './list-first-word-capitalization.js'
import { linkPunctuation } from './link-punctuation.js'
import { earlyAccessReferences } from './early-access-references.js'
import { yamlScheduledJobs } from './yaml-scheduled-jobs.js'

export const gitHubDocsMarkdownlint = {
  rules: [
    searchReplace, // Open-source plugin
    codeFenceLineLength,
    imageAltTextEndPunctuation,
    imageFileKebab,
    incorrectAltTextLength,
    internalLinksLang,
    internalLinksSlash,
    imageAltTextExcludeStartWords,
    listFirstWordCapitalization,
    linkPunctuation,
    earlyAccessReferences,
    yamlScheduledJobs,
  ],
}
