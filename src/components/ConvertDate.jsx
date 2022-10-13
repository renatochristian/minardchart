export function ConvertDate({date}){
	
	const newDate = date.substring(0,2)+'/'+date.substring(2,5)+'/'+date.substring(5)
	return newDate

}