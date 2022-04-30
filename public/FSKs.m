close all
clear

fc = 100;
fs = 20*fc;
t = 0:(1/fs):1;
ct = sin((2*pi*fc).*t);
subplot(4,1,1);
plot(t,ct);
mt = zeros(1,length(ct));
mt(100:150) = 1;
mt(230:270) = 1;
mt(400:550) = 1;
mt(650:720) = 1;
mt(1000:1200) = 1;
mt(1750:1900) = 1;
subplot(4,1,2);
plot(t,mt);

st = zeros(1,length(mt));

for i = 1:length(t)
    if mt(i) == 0 
        st(i) = sin((2*pi*fc).*t(i));
    else
        st(i) = sin((2*pi*5*fc).*t(i));
    end
end
subplot(4,1,3);
plot(t,st);
dt = bandpass(st,[4*fc,6*fc],fs);
dt = round(lowpass(abs(dt),20,fs)+0.3);
subplot(4,1,4);
plot(t,dt);