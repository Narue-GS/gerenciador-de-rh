export const isNameValid  = (name:string):boolean => {
  const nameTest:boolean = !/[`!@#$%^&*()_+\-=\[´;:"\\|,.<>\/?~]|[0-9]|\t|^\s|\s{2}/.test(name) && name.length > 1
  return nameTest
}

export const isBirthValid = (birth:string):boolean => {
  return birth.length > 0
}

export const isEmailValid = (email:string):boolean => {
  const emailTest:boolean = !/^@|@$|@+\.|\s|^\./.test(email)
  const hasOneAt = ():boolean => {
    let counter = 0
    for(let i of email.split("")){
      i === "@" ? counter += 1 : counter += 0
    }
    return counter === 1
  }
  return emailTest && hasOneAt()
}

export const isPasswordValid = (password:string) => {
  const hasMinimalSize:boolean = password.length >= 8
  const isStrong:boolean = /[`!@#$%^&*()_+\-=\[´;:"\\|,.<>\/?~]|[0-9]|\t|^\s|\s{2}/.test(password)
  return hasMinimalSize && isStrong
}

export const isJurisdictionValid = (id: string|null|number) => {
  return id !== null
}

 