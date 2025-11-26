const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const group = {};
const file = {};
const permissionInfo = {
  0: [],
  1: ["X"],
  2: ["W"],
  3: ["X", "W"],
  4: ["R"],
  5: ["R", "X"],
  6: ["R", "W"],
  7: ["R", "X", "W"],
};
const [U, F] = input[0].split(" ").map(Number);

for (let i = 1; i <= U; i++) {
  let [userName, userGroups] = input[i].split(" ");
  userGroups = userGroups?.split(",").concat(userName) ?? [userName];

  for (const userGroup of userGroups) {
    if (!group[userGroup]) {
      group[userGroup] = [];
    }

    group[userGroup].push(userName);
  }
}

for (let i = U + 1; i <= U + F; i++) {
  const [fileName, permission, owner, ownedGroup] = input[i].split(" ");
  if (!file[fileName]) {
    file[fileName] = {};
  }
  file[fileName] = {
    permission,
    owner,
    ownedGroup,
  };
}

const Q = +input[U + F + 1];
let answer = [];
for (let i = U + F + 2; i <= U + F + Q + 1; i++) {
  const [userName, fileName, operation] = input[i].split(" ");
  const { permission, owner, ownedGroup } = file[fileName];
  const filePermission = permission.split("").map(Number);

  let enablePermission = permissionInfo[filePermission[2]];

  const isOwner = owner === userName;
  const isOwnedGroup = group[ownedGroup].includes(userName);

  if (isOwner) {
    enablePermission = permissionInfo[filePermission[0]].concat(
      permissionInfo[filePermission[1]]
    );
  } else if (isOwnedGroup) {
    enablePermission = permissionInfo[filePermission[1]].concat(
      permissionInfo[filePermission[2]]
    );
  }

  const isAbleOperation = enablePermission.includes(operation);
  isAbleOperation ? answer.push(1) : answer.push(0);
}

console.log(answer.join("\n"));
