"""
python ==================
У нас есть текстовый файл input.txt. В нем через запятую записаны числа. Надо написать скрипт который
- создаст output.txt
- запишет в файл суммы чисел сгруппированный по две строки. т.е. сложить все числа по паре строк
- первая строчка = сумма всех чисел из 1 и 2 строки
- вторая строчка = сумма всех чисел из 3 и 4 строки 
- файл можно считать чистым, только целые числа и запятые
- в файле произвольное кол-во строк.
- сумма всех чисел input.txt = сумма всех чисел output.txt

input.txt
5,5,0
5
1,1
1,1
3
4
"""

def main():
    need_write = False
    current_sum = 0
    with open('input.txt', 'r') as f_in:
        with open('output.txt', 'w') as f_out:
            for line in f_in:
                current_sum += sum((int(i) for i in line.strip('\n').split(',') if i.isdigit()))
                if need_write:
                    f_out.write(f'{str(current_sum)}\n')
                    current_sum = 0
                need_write = not need_write
            if need_write:
                f_out.write(current_sum)

if __name__ == '__main__':
    main()
