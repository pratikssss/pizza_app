close all
clc
fm = 30;
fc = 100;
fs = 8*fc;
t = 0:(1/fs):1;
ct =  sawtooth((2*pi*fc).*t);
subplot(5,1,1);
plot(t,ct);
mt = sin((2*pi*fm).*t);
subplot(5,1,2);
plot(t, mt);
st = zeros(1,length(t));
for i = 1:length(mt)
    if(ct(i) > mt(i))
        st(i) = 1;
    end
end
subplot(5,1,3);
plot(t,st);
encodedSig = zeros(1,length(st));
for i = 2:length(st)-10
    if(st(i) == 0 && st(i-1) ~= 0)
        encodedSig(i:i+2) = 1;
    end
end
subplot(5,1,4);
plot(t,encodedSig);
dt = lowpass(encodedSig,5,fs);
subplot(5,1,5);
plot(t,dt);