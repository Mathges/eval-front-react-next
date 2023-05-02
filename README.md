# Eval Frontend Mathieu GESLIN

## Generals

Front: React + Next
API: The api I made for the API evaluation will be used

Some instruction will be changed to match the API used
 
### Layouts
4 layouts:
- 1 auth/register (maybe split it)
- 1 admin
- 1 company
- 1 freelance


### theming

For light theme: shades of white and grey accentuated with orange elements, dark font
For dark theme: shades of black, also accentuated with orange elements, light grey font

## Instruction modifications

### Auth
Auth will not be declined, cause the in the API, users and companies are in the same collection, only a field into a document differs.

## TODO:

- [ ] wireframes (started, will do progressively)
- [x] react-next init
- [x] connect front and back
- [x] header and layout inits
- [x] sign in/up feature
- [ ] search feature
- [x] theming and theme switcher feature init
- [x] i18n and lang switcher feature init
- [x] generic components
- [ ] integrate reset password to WFs and app
- [ ] add skill and profession routes to backend

## Notes

### Forms

Forms will miss front side validation before sending request and some error handling.
They'll need a bit a CSS improvements, and a refacto (especially for the register form). The pages could be made as 'static' component for better lisibility

### i18n

i18n needs a refacto, a per-page file for example
