import{_ as e,c as o,o as r,a as t}from"./app.8bdf0e54.js";const p=JSON.parse('{"title":"Comparison Against Other Form Libraries","description":"","frontmatter":{"head":[["meta",{"property":"og:title","content":"Compare HouseForm to Other Libs"}],["meta",{"property":"og:description","content":"Compare HouseForm to other form libraries such as Formik and React Hook Form."}]]},"headers":[{"level":2,"title":"HouseForm vs. Formik","slug":"houseform-vs-formik","link":"#houseform-vs-formik","children":[]},{"level":2,"title":"HouseForm vs. React Hook Form","slug":"houseform-vs-react-hook-form","link":"#houseform-vs-react-hook-form","children":[]},{"level":2,"title":"HouseForm vs. React Final Form","slug":"houseform-vs-react-final-form","link":"#houseform-vs-react-final-form","children":[]}],"relativePath":"comparison.md"}'),a={name:"comparison.md"},s=t('<h1 id="comparison-against-other-form-libraries" tabindex="-1">Comparison Against Other Form Libraries <a class="header-anchor" href="#comparison-against-other-form-libraries" aria-hidden="true">#</a></h1><p>We know that we&#39;re not the only choice in the React ecosystem for form validation libraries. Let&#39;s compare HouseForm to some of the other popular libraries.</p><p>We wrote a long-form explanation explaining why we build HouseForm and are using it over other form libraries here:</p><p><a href="https://dev.to/crutchcorn/formik-works-great-heres-why-i-wrote-my-own-591m" target="_blank" rel="noreferrer">Formik Works Great; Here&#39;s Why I Wrote My Own</a></p><p>That said, here&#39;s a quick recap of why you might choose HouseForm over other React forms libraries.</p><h2 id="houseform-vs-formik" tabindex="-1">HouseForm vs. <a href="https://formik.org/" target="_blank" rel="noreferrer">Formik</a> <a class="header-anchor" href="#houseform-vs-formik" aria-hidden="true">#</a></h2><ul><li><strong>HouseForm is lightweight:</strong> <a href="https://unpkg.com/browse/formik@latest/dist/formik.esm.js" target="_blank" rel="noreferrer">Formik is 68.3 kB without GZIP</a>. Meanwhile, <a href="https://unpkg.com/browse/houseform@latest/dist/houseform.umd.cjs" target="_blank" rel="noreferrer">HouseForm is 9.87 kb without GZIP</a>*.</li><li><strong>HouseForm uses Zod:</strong> Formik primarily uses <a href="https://github.com/jquense/yup" target="_blank" rel="noreferrer">Yup</a> to do validation, HouseForm relies more heavily on <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer">Zod</a> to do its validation. While Yup is more popular, Zod generally has stricter TypeScript types and is well-loved by many React developers.</li><li><strong>HouseForm is field-focused:</strong> Formik requires you to pass <a href="https://formik.org/docs/api/withFormik#validationschema-schema--props-props--schema" target="_blank" rel="noreferrer">a <code>validationSchema</code> property</a> to validate the whole form with Yup. HouseForm, on the other hand, allows you to validate each field individually <a href="/reference.html#field-props">using inline properties associated with the field itself</a>.</li><li><strong>HouseForm is flexible:</strong> While <a href="https://formik.org/docs/api/withFormik#validateonblur-boolean" target="_blank" rel="noreferrer">Formik forces you to choose between <code>onChange</code>, <code>onSubmit</code>, and <code>onMount</code> validation</a>, HouseForm allows you to choose which validation to use for each field.</li><li><strong>HouseForm is actively maintained:</strong> As of this writing, <a href="https://www.npmjs.com/package/formik" target="_blank" rel="noreferrer">Formik has not seen a package publish in nearly 3 years</a>, despite <a href="https://github.com/jaredpalmer/formik/pulls" target="_blank" rel="noreferrer">many open community PRs</a>. There doesn&#39;t appear to be a clear community-led fork of Formik to help supplement this, either. HouseForm, on the other hand, is being actively maintained and is actively used in production today.</li><li><strong>Formik is fast:</strong> It&#39;s worth mentioning that HouseForm is not yet as performant as Formik. In general, <a href="https://github.com/crutchcorn/houseform/tree/main/lib/benchmarks" target="_blank" rel="noreferrer">our benchmarks</a> show that Formik is ~1.25x faster at most operations when rendering 1,000 form fields. However, HouseForm is still more than fast enough for most use cases. In those same benchmarks we&#39;re able to do an initial render of those 1,000 fields in ~80ms.</li><li><strong>Formik is popular:</strong> As of time of writing, <a href="https://www.npmjs.com/package/formik" target="_blank" rel="noreferrer">Formik has 2 million downloads a week</a>. HouseForm, on the other hand, is still new and therefore doesn&#39;t have the same foothold in the industry.</li></ul><h2 id="houseform-vs-react-hook-form" tabindex="-1">HouseForm vs. <a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">React Hook Form</a> <a class="header-anchor" href="#houseform-vs-react-hook-form" aria-hidden="true">#</a></h2><ul><li><strong>HouseForm is lightweight:</strong> <a href="https://unpkg.com/browse/react-hook-form@latest/dist/index.esm.mjs" target="_blank" rel="noreferrer">React Hook Form is 87.7 kb without GZIP</a>. Meanwhile, <a href="https://unpkg.com/browse/houseform@latest/dist/houseform.umd.cjs" target="_blank" rel="noreferrer">HouseForm is 9.87 kb without GZIP</a>*.</li><li><strong>HouseForm uses controlled components:</strong> React Hook Form uses <a href="https://beta.reactjs.org/learn/sharing-state-between-components#controlled-and-uncontrolled-components" target="_blank" rel="noreferrer">uncontrolled components</a> to handle form state, while HouseForm uses controlled components. This allows HouseForm more control over field state, re-renders, and validation.</li><li><strong>HouseForm allows for per-field validation with Zod:</strong> While <a href="https://react-hook-form.com/get-started#Applyvalidation" target="_blank" rel="noreferrer">React Hook Form supports some form of per-field validation</a> it only support built-in validation provided by the DOM. <a href="https://react-hook-form.com/get-started#SchemaValidation" target="_blank" rel="noreferrer">To use more complex validation with React Hook Form, you need to use a form schema.</a> HouseForm, on the other hand, allows you to use <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer">Zod</a> right inline with your field definitions.</li><li><strong>HouseForm has first-class support for React Native:</strong> While <a href="https://react-hook-form.com/get-started#ReactNative" target="_blank" rel="noreferrer">React Hook Form has some support for React Native</a>, it uses a different API than the web version. HouseForm, on the other hand, has a <a href="/guides/react-native.html">the same API for React Native as it does the web version</a>.</li><li><strong>React Hook Form is popular:</strong> As of time of writing, <a href="https://www.npmjs.com/package/react-hook-form" target="_blank" rel="noreferrer">React Hook Form has 3 million downloads a week</a>. HouseForm, on the other hand, is still new and therefore doesn&#39;t have the same foothold in the industry.</li></ul><blockquote><p>We&#39;ve yet to run benchmarks comparing HouseForm to React Hook Form. While we&#39;re fairly sure that React Hook Form is more performant than HouseForm, it&#39;s unclear by how much.</p><p>If you&#39;d like to help us with this, please <a href="https://github.com/crutchcorn/houseform/issues/new" target="_blank" rel="noreferrer">open an issue</a>.</p></blockquote><h2 id="houseform-vs-react-final-form" tabindex="-1">HouseForm vs. <a href="https://final-form.org/react" target="_blank" rel="noreferrer">React Final Form</a> <a class="header-anchor" href="#houseform-vs-react-final-form" aria-hidden="true">#</a></h2><ul><li><strong>HouseForm is lightweight:</strong> <a href="https://unpkg.com/browse/react-final-form@latest/dist/react-final-form.es.js" target="_blank" rel="noreferrer">React Final Form is 24 kb without GZIP</a> and relies on <a href="https://unpkg.com/browse/final-form@latest/dist/final-form.es.js" target="_blank" rel="noreferrer">a 47.6 kb base package</a> for <em>a total non-GZIP bundle size of 71.6 kb</em>. Meanwhile, <a href="https://unpkg.com/browse/houseform@latest/dist/houseform.umd.cjs" target="_blank" rel="noreferrer">HouseForm is 9.87 kb without GZIP</a>*.</li><li><strong>HouseForm uses Zod:</strong> While React Final Form requires you to use a manual function to do validation, HouseForm allows you to use <a href="https://github.com/colinhacks/zod" target="_blank" rel="noreferrer">Zod</a> to do validation. Zod allows you to use an easier API to define common validation types than manual functions.</li><li><strong>HouseForm supports React Native:</strong> <a href="https://github.com/final-form/react-final-form-hooks/issues/48" target="_blank" rel="noreferrer">React Final Form appears not to have React Native support currently</a>. This differs from <a href="/guides/react-native.html">HouseForm, which fully supports React Native</a>.</li><li><strong>HouseForm has a consistent API</strong>: <a href="https://final-form.org/docs/react-final-form/getting-started" target="_blank" rel="noreferrer">There appear to be many different ways to define a field in React Final Form, per their docs</a>. In HouseForm? There&#39;s a single consistent method of creating fields. Less of an API surface area to know, smaller surface area for bugs to occur.</li><li><strong>HouseForm is actively maintained:</strong> As of this writing, <a href="https://github.com/final-form/react-final-form/commits/main" target="_blank" rel="noreferrer">React Final Form has only had 5 commits in the past two years</a>, despite <a href="https://github.com/final-form/react-final-form/issues" target="_blank" rel="noreferrer">many open GitHub issues</a>. HouseForm, on the other hand, is being actively maintained and is actively used in production today.</li><li><strong>Final Form is framework agnostic:</strong> While HouseForm is only built for React, <a href="https://final-form.org/" target="_blank" rel="noreferrer">React Final Form has a framework agnostic core called &quot;Final Form&quot;</a>. This means that you can build variants of Final Form for any framework, including Vue, Angular, and more.</li><li><strong>React Final Form is more popular:</strong> As of time of writing, <a href="https://www.npmjs.com/package/react-final-form" target="_blank" rel="noreferrer">React Final Form has 300 thousand downloads a week</a>. HouseForm, on the other hand, is still new and therefore doesn&#39;t have the same foothold in the industry.</li></ul><blockquote><p>We&#39;ve yet to run benchmarks comparing HouseForm to React Final Form.</p><p>If you&#39;d like to help us with this, please <a href="https://github.com/crutchcorn/houseform/issues/new" target="_blank" rel="noreferrer">open an issue</a>.</p></blockquote><hr><blockquote><p>* Sizes of bundles were taken in February 2023 and are subject to change as time goes on.</p></blockquote><hr><blockquote><p>Want to expand this section? <a href="https://github.com/crutchcorn/houseform/issues/new" target="_blank" rel="noreferrer">Open an issue with more details</a>.</p></blockquote>',17),i=[s];function n(l,h,m,f,c,u){return r(),o("div",null,i)}const g=e(a,[["render",n]]);export{p as __pageData,g as default};
