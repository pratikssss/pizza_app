close all
clear

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
plot(t,mt);

st = mt.*ct;
subplot(4,1,3);
plot(t,st);

rt = abs(st);
rt = round(lowpass(rt, 20, fs));
subplot(4,1,4);
plot(t,rt);