close all
clear
fc = 100;
fm = 40;
fs = 16*fc;
t = 0:1/fs:1;
mt = sin((2*pi*fm).*t);

subplot(4,1,1);
plot(t,mt);
ct = square((2*pi*4*fc).*t);
ct = (ct + 1)/2;
subplot(4,1,2);
plot(t,ct);

st = mt.*ct;
subplot(4,1,3);
plot(t,st);

dt = lowpass(st,1,50);
subplot(4,1,4);
plot(t,dt);