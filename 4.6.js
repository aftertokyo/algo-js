function factoralise(num) {
    if (num<0)
    return -1;
    else if (num ==0)
    return 1;
    else {
        return (num * factoralise(num-1));

    }
}
factoralise(n)