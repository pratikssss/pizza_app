close all
clc

fc = 100;
fs = 8*fc;
t = 0:(1/fs):1;
ct = sin((2*pi*fc).*t);
subplot(4,1,1);
plot(t,ct);
mt = zeros(1,length(ct));
mt(100:150) = 1;
mt(230:270) = 1;
mt(400:550) = 1;
mt(650:720) = 1;
mt = round(mt);
subplot(4,1,2);
plot(t, mt);

temp = zeros(1,length(ct));
for i = 2:length(mt)
    if(mt(i-1) == mt(i))
        continue
    else
        temp(i) = 1;
    end
end
st = sin((2*pi*fc).*t);
ph = zeros(1,1);
for i = 1:length(temp)
    if(temp(i) == 1)
        ph = ph + pi;
    end
    st(i) = sin((2*pi*fc).*t(i) + ph);
end 
subplot(4,1,3);
plot(t, st);