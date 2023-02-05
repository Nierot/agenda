// The minutes are a LaTeX document, with multiple lines
// The lines are separated by a newline character

export const getActionPoints = (minutes: string) => {
  
  // First, grab all old action points, which are in the format of:
  // \reap{BMxx.xx}{name}{description}{status}{update}
  // We only need actionpoints where the status is "O"
  // We need to get the name, description and status
  const oldActionPoints = [...minutes.matchAll(/\\reap\{.+?\}\{(.+?)\}\{(.+?)\}\{O\}\{.+?\}/gm)]

  // We need to parse every occurance of \ap{name}{description} 
  const newActionPoints = [...minutes.matchAll(/\\ap/gm)]

  console.log({oldActionPoints, newActionPoints});
}