import sys
import re

def main():
    for line in sys.stdin:
        line = line.strip().lower()
        words = re.findall(r'[a-zа-яё]+', line)
        
        for word in words:
            if len(word) > 0:
                first_letter = word[0]
                print(f"{first_letter}\t{len(word)}")
def main():
    current_letter = None
    sum_lengths = 0
    count_words = 0
    
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
            
        letter, length = line.split('\t', 1)
        
        try:
            length = int(length)
        except ValueError:
            continue
        if current_letter == letter:
            sum_lengths += length
            count_words += 1
        else:
            if current_letter is not None:
                avg_length = sum_lengths / count_words if count_words > 0 else 0
                print(f"{current_letter}\t{avg_length:.2f}")
            current_letter = letter
            sum_lengths = length
            count_words = 1
    if current_letter is not None:
        avg_length = sum_lengths / count_words if count_words > 0 else 0
        print(f"{current_letter}\t{avg_length:.2f}")


if __name__ == "__main__":
    main()