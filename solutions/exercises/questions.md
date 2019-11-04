# Elijah Borwn Question 

They both yeild the same results...but whch one is more common to use?



```javascript
const fullName = "elijah brown";
function capitalizeLastName(fullName) {
  const index = fullName.indexOf(" ") + 1;
  const firstName = fullName.substring(0, index);
  const newLastName =
    fullName[index].toUpperCase() + fullName.substring(index + 1);
  return firstName + newLastName;
}
```

why this ^ (vs) this v??

```javascript
function capitalizeLastName(fullName) {
  const firstName = fullName.split(" ")[0];
  const lastName = fullName.split(" ")[1];

  const newlastname = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstName} ${newlastname}`;
}
```
