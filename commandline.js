var sum = 0;
var num = 0;
for(var i = 2; i < process.argv.length; i++)
{
	num = Number(process.argv[i]);
	sum += num;
}
console.log(sum);
