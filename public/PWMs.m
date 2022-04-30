close all
clc
fm = 30;
fc = 100;
fs = 8*fc;
t = 0:(1/fs):1;
ct =  sawtooth((2*pi*fc).*t);
subplot(4,1,1);
plot(t,ct);
mt = sin((2*pi*fm).*t);
subplot(4,1,2);
plot(t, mt);
st = zeros(1,length(t));
for i = 1:length(mt)
    if(ct(i) > mt(i))
        st(i) = 1;
    end
end
% st = modulate(mt,fc,fs,"pwm");
% st = st + 0.5;
subplot(4,1,3);
plot(t,st);
dt = -1.*lowpass(st,20,fs) + 1;
subplot(4,1,4);
plot(t,dt);